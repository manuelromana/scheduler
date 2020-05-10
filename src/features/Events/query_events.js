import { gql } from 'apollo-boost';

export const GET_ALL_EVENTS = gql`
query get_all_events {
    calendar_events {
      id
      end
      start
      title
    }
  }
`
