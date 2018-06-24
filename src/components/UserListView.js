import React, { Component } from 'react'
import { Item, Container, Grid, Header, Segment, Loader, Dimmer, Button, Divider } from 'semantic-ui-react'

export default class UserListView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 0,
      totalPages: 4,
      pages: [],
      isFetching: false,
    }
  }

  async loadInitialContent() {
    this.setState({ isFetching: true })
    await this.props.getListOfUsers('1')
    this.updateState()
  }

  loadOnScroll = (e) => {
    if (this.state.currentPage === this.state.totalPages) return
    const rect = document.getElementById("bottom-content").getBoundingClientRect()
    const isAtEnd = (
      rect.right <= (document.documentElement.clientWidth || window.innerWidth) &&
      rect.bottom <= (document.documentElement.clientHeight || window.innerHeight)
    )
    if (!isAtEnd) return
    this.loadUsers()
  }

  loadUsers() {
    if (this.state.isFetching) return
    this.setState({ isFetching: true })
    this.props.getListOfUsers(`${this.state.currentPage + 1}`)
    setTimeout(() => {
      if (this.state.currentPage === this.state.totalPages && this.props.loading) return
      this.updateState()
    }, 3000)
  }

  updateState() {
    let list = this.state.pages
    list.push(this.props.pages)
    this.setState({
      pages: list,
      isFetching: false,
      currentPage: this.state.currentPage + 1,
    })
  }

  UNSAFE_componentWillMount() {
    this.loadInitialContent();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.loadOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadOnScroll);
  }

  render() {
    return (
      <Container id='container'>
        <Grid textAlign='center' verticalAlign='middle'>
          <Grid.Column textAlign='left'>
            <Segment>
              <Header textAlign='center'>Users</Header>
            </Segment>
            {
              this.state.pages.map((users, i) => (
                <div>
                  <Item.Group divided key={i}>
                    {
                      users.data.map((user, j) => (
                        <Item key={i + '' + j}>
                          <Item.Image size='small' circular src={user.avatar} />
                          <Item.Content verticalAlign='middle'>{user.first_name}  {user.last_name}</Item.Content>
                        </Item>
                      ))
                    }
                  </Item.Group>
                  <Divider />
                </div>
              ))
            }
            <Segment id="bottom-content">
              {
                (this.state.currentPage === this.state.totalPages) ?
                  <Segment textAlign='center' id='no-more-result-box'> No More Results</Segment>
                  : (this.state.isFetching) ? <Dimmer active><Loader /></Dimmer>
                    : <Button fluid basic borderless onClick={() => this.loadUsers()}>Load More</Button>
              }
            </Segment>
          </Grid.Column>
        </Grid>
      </Container >
    )
  }
}
