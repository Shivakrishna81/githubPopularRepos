import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {reposList: [], activeLanguageId: 'ALL', isLoading: true}

  componentDidMount() {
    this.getLanguageData()
  }

  getLanguageData = async () => {
    const {activeLanguageId} = this.state
    const url = 'https://apis.ccbp.in/popular-repos?language='

    const response = await fetch(`${url}${activeLanguageId}`)
    const data = await response.json()
    const updatedData = data.popular_repos.map(each => ({
      name: each.name,
      id: each.id,
      issuesCount: each.issues_count,
      forksCount: each.forks_count,
      starsCount: each.stars_count,
      avatarUrl: each.avatar_url,
    }))
    this.setState({reposList: updatedData, isLoading: false})
  }

  onClickChangeId = id => {
    this.setState({activeLanguageId: id}, this.getLanguageData)
  }

  render() {
    const {reposList, activeLanguageId, isLoading} = this.state
    return (
      <div className="container">
        <h1 className="head">Popular</h1>
        <ul className="ul">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              key={each.id}
              isActive={activeLanguageId === each.id}
              onClickEvent={this.onClickChangeId}
            />
          ))}
        </ul>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        ) : (
          <ul className="ul2">
            {reposList.map(repo => (
              <RepositoryItem details={repo} key={repo.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
