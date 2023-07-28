import PocketBase from 'pocketbase'
const url = 'https://une-meeting.pockethost.io'
// const url = `${import.meta.env.REACT_POCKETBASE}`
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

export async function deletePost (id){
    let confirmDelete = window.confirm('Estas seguro que quieres eliminar?')
    if (!confirmDelete) {
        return
    }
    await client.collection('posts').delete(id)
    
}

