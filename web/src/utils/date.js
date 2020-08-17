import moment from 'moment'

export const prettyTime = (datetime) => {
  return moment(datetime).fromNow()
}
