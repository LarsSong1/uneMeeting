import PocketBase from 'pocketbase'
const url = 'https://une-meeting.pockethost.io'
export const client = new PocketBase(url)
client.autoCancellation(false);


export async function getPosts() {
    return await client.collection("posts").getFullList();
}


export async function createPost(tittle, description, area, image) {
    const data = {
        "title": tittle,
        "description": description,
        "area": area,
        "image": image
    }
    await client.collection('posts').create(data)
}



