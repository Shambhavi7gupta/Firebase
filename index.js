const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5EByaiFBmTl92XaYoBGOfctfDQyrYTx4",
    authDomain: "fir-frontend-11737.firebaseapp.com",
    projectId: "fir-frontend-11737",
    storageBucket: "fir-frontend-11737.appspot.com",
    messagingSenderId: "480048431474",
    appId: "1:480048431474:web:49e2253015e19db6f01deb"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const register = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    
    auth.createUserWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

const login = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((res) => {
        console.log(res.user)
    })
    .catch((err) => {
        alert(err.message)
        console.log(err.code)
        console.log(err.message)
    })
}

const saveData = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const address = document.getElementById('address').value

    db.collection('users')
    .add({
        email:email,
        password: password,
        name:name,
        age:age,
        address:address
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}

const readData = () => {
    db.collection('users')
    .get()
    .then((data) => {
        console.log(data.docs.map((item) => {
            return{...item.data(), id: item.id}
        }))
    } )

}

const updateData = () => {
    db.collection('users').doc('NDvjoNtMLHaqklfkjTxo')
    .update({
        email: 'sham23@gmail.com',
        password: '1357',
        name:'New user',
        age:'32',
        address:'Nagpur'
    })
    .then(() => {
        alert('Data Updated')
    })
}

const deleteData = () => {
    db.collection('users').doc('3ZJEJ88YP69PhsD7qxXi').delete()
    .then(() => {
        alert('Data Deleted')
    })
}