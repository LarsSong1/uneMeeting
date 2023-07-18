import PocketBase from 'pocketbase'
const url = 'https://une-meeting.pockethost.io'
export const client = new PocketBase(url)
client.autoCancellation(false);



