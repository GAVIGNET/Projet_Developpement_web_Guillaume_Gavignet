const getPosts = async () => {
    try{
        const reponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!reponse.ok){
            throw new Error("erreur http : " + reponse.status);
        }
        const data = await reponse.json();
        console.log("titre: ", data.title);
        console.log("contenu : ", data.body);
    } catch (erreur) {
        console.error("une erreur est survenue :", erreur.message)
    }
}

getPosts();