import PocketBase from 'pocketbase'
const url = 'https://une-meeting.pockethost.io'
export const client = new PocketBase(url)
client.autoCancellation(false);


export async function getPosts() {
    return await client.collection("posts").getFullList();
}


export async function createPost(title, description, area, blob) {
 

    const formData = new FormData()

    formData.append("title", title)
    formData.append("description", description)
    formData.append("area", area)
    formData.append("image", blob)
    await client.collection('posts').create(formData) 

}



