import PocketBase from 'pocketbase'
const url = 'https://une-meeting.pockethost.io'
// const url = `${import.meta.env.REACT_POCKETBASE}`
export const client = new PocketBase(url)
client.autoCancellation(false);





export async function getPosts() {
    return await client.collection("posts").getFullList();
}


export async function createPost(title, description, area, blob) {

    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("area", area);

    
        await client.collection('posts').create(formData);
    
        alert('Post created correctly')
      } catch (error) {
        console.error("Error creating post:", error);
        throw error; // Re-throw the error to handle it in the component
      }

}

export async function deletePost (id){

    try{
        await client.collection("posts").delete(id)
    
    } catch (error){
        alert('no se ha eliminado', error)
    }
 
    
}

export async function updatePost (id){
    const formData = new FormData()
    formData.append("title", title)
    formData.append("description", description)
    formData.append("area", area)
    formData.append("image", blob)
    await client.collection('posts').update(id, formData)
}