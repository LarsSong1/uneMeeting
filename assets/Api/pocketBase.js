import PocketBase from 'pocketbase'
const url = 'https://une-meeting.pockethost.io'
export const client = new PocketBase(url)
client.autoCancellation(false);





export const isUser = client.authStore.isValid;

export async function getPosts() {
    return await client.collection("posts").getFullList();
}

export async function createPost(title, description, area, link) {
    try {

        if (!client.authStore.model || !client.authStore.model.id) {
            throw new Error("User ID is missing. Please make sure the user is logged in.");
        }
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("area", area)
        formData.append('url', link)
        formData.append("user", client.authStore.model.id)
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

export async function updatePost(id, title, description, area, link) {
    try {
        const formData = new FormData()
        formData.append("title", title)
        formData.append("description", description)
        formData.append("area", area)
        formData.append("url", link)
        formData.append("user", client.authStore.model.id)
        await client.collection('posts').update(id, formData)
        
        alert('los datos han sido alterados')

    } catch (error) {
        alert('Ocurrio un error en edicion')
    }

}


export async function login(username, password) {
    const data = await client.collection('users').authWithPassword(username, password)
    console.log(data)


}

export function logout(){
    client.authStore.clear()
}


export async function signUp(username, password, passwordConfirm){
    try {
        const formData = new FormData()
        formData.append("username", username)
        formData.append("password", password)
        formData.append("passwordConfirm", passwordConfirm)
        await client.collection('users').create(formData)
        alert('se he creado un usuario')
    }catch (error) {    
        console.log(error)
    }
   
}

