import PocketBase from 'pocketbase'
const url = 'https://une-meeting.pockethost.io'
export const client = new PocketBase(url)
client.autoCancellation(false);


export async function getPosts(){
    return await client.collection("posts").getFullList();
}



