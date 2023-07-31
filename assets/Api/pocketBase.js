import PocketBase from 'pocketbase'
const url = 'https://une-meeting.pockethost.io'
export const client = new PocketBase(url)
client.autoCancellation(false);


export const isUser = client.authStore.isValid;

export async function getPosts() {
    return await client.collection("posts").getFullList();
}

export async function createPost(title, description, area, blob) {
    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("area", area);
        // formData.append("user", client.authStore.model.id)
        await client.collection('posts').create(formData);
        alert('Post created correctly')

    } catch (error) {
        console.error("Error creating post:", error);
        throw error; // Re-throw the error to handle it in the component
    }

}

export async function deletePost(id) {
    try {
        await client.collection("posts").delete(id)
        alert('Se ha Eliminado un post')
    } catch (error) {
        alert('no se ha eliminado', error)
    }

}

export async function updatePost(id, title, description, area) {
    try {
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("area", area)
        // formData.append("user", client.authStore.model.id)
        await client.collection('posts').update(id, formData)
        
        alert('los datos han sido alterados')

    } catch (error) {
        alert('Ocurrio un error en edicion')
    }

}


export async function login(username, password) {
    await client.collection('posts').authWithPassword(username, password)
}

export function logout(){
    client.authStore.clear()
}


export async function signUp(username, password){
    const data = {username: username, password: password, passwordConfirm: password}
    await client.collection('users').create(data)
}

