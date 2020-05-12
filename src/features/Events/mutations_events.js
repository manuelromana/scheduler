import { gql } from 'apollo-boost';

export const EVENT_PUSH = gql`
mutation insert_single_calendar_event($objects:[calendar_events_insert_input!]!) {
    insert_calendar_events(objects:$objects){
    returning{
      id
      title
      start
      end
    }
    }
  }
  
`

export const DEL_EVENT = gql`
mutation del_event($id: Int!) {
  delete_calendar_events(where: {id: {_eq: $id}}) {
    affected_rows
  }
}
`
