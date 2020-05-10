import { gql } from 'apollo-boost';

export const EVENT_PUSH = gql`
mutation insert_single_calendar_event($objects:[calendar_events_insert_input!]!) {
    insert_calendar_events(objects:$objects){
    returning{
      title
      start
      end
    }
    }
  }
  
`
