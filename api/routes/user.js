import { auth, db } from '../../firebase_key.js'
import verifyToken from '../../middleware/verifyToken.js'
import { collection, getDocs, doc, setDoc, addDoc, getDoc } from 'firebase/firestore'
import express from 'express'
const router = express.Router()

router.get('/',verifyToken, async (req, res) => {
    try {
        const userRecords = await auth.listUsers();
        const userCollectionRef = db.collection("users")
        const userSnapshot = await userCollectionRef.get()

        const usersData = (userSnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))

        const combineData = userRecords.users.map((user) => {
            const userData = usersData.find(data => data.id === user.uid)
            return {
                time: user.metadata.creationTime,
                email: user.email,
                ...userData
            }
        })

        res.status(200).json({
            status : "Success",
            message : "Success get all users",
            userData : combineData
        })
    } catch (err) {
        console.error(err)
        res.json(err)
    }
})

router.get('/:id',verifyToken, async (req, res) => {
    try {
        const { id } = req.params;
        const userDocRef = db.collection('users')
        const userDoc = await userDocRef.doc(id).get();

        if (userDoc.exists) {
            res.json(userDoc.data());
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/',verifyToken, async (req, res) =>  {
    const {name, role, birthday, gender, id} = req.body
    try {
        const userDocRef = db.collection('users').doc(id)
        const userData = await userDocRef.set({name, role, birthday, gender})
        
        res.json({status: "success"})
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id',verifyToken, async (req, res) =>  {
    const { id } = req.params;
    try {
        const userDocRef = db.collection('users').doc(id)
        const userData = await userDocRef.delete()
        const authUserData = await auth.deleteUser(id)
        
        res.json({status: "success"})
    } catch (error) {
        res.json(error)
    }
})

router.post('/add',verifyToken, async (req, res) =>  {
    const {email, password, role, name, birthday, gender} = req.body
    try {
        const user = await auth.createUser({email, password})
        const uid = user.uid
        const userDocRef = await db.collection('users').doc(uid)
        const userData = await userDocRef.set({name, role, birthday, gender})
        
        res.json({status: "success"})
    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

router.put('/:id',verifyToken, async (req, res) =>  {
    const {id} = req.params
    const { name, role, birthday, gender } = req.body
    try {
        const userDocRef = db.collection('users').doc(id)
        const userData = await userDocRef.update({name, role, birthday, gender})
        
        res.json({status: "success"})
    } catch (error) {
        console.error(error)
        res.json(error)
    }
})

export default router