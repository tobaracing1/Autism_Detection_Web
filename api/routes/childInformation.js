import { auth, db, firestore } from '../../firebase_key.js'
import { collection, getDocs, doc, setDoc, addDoc, getDoc } from 'firebase/firestore'
import express from 'express'
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const childInformationCollectionRef = db.collection("childInformation")
        const childInformationSnapshot = await childInformationCollectionRef.get()

        const childInformationsData = (childInformationSnapshot.docs.map(doc => {
            return {
                id: doc.id,
                ...doc.data()
            }
        }))

        res.json(childInformationsData)
    } catch (err) {
        console.error(err)
        res.json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const childInformationCollectionRef = db.collection("childInformation")
        const childInformationSnapshot = await childInformationCollectionRef.get();

        const filteredChildInformationData = childInformationSnapshot.docs.map(doc =>  { return {childId: doc.id, ...doc.data()}}).filter(doc => doc.userId === id)
        res.json(filteredChildInformationData);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/', async (req, res) =>  {
    const {name, birthday, gender, etnic, testerRole, userId} = req.body
    function generateRandomId() {
        // Generating a random number and converting it to a hexadecimal string
        const randomHex = Math.random().toString(16).substring(2, 10);
        
        // Creating a prefix to make the ID more distinguishable
        const prefix = userId;
        
        // Combining the prefix and the random hexadecimal string
        const randomId = prefix + randomHex;
      
        return randomId;
    }

    try {
        const id = generateRandomId()
        const time = firestore.Timestamp.fromDate(new Date())
        const childInformationDocRef = db.collection('childInformation').doc(id)
        const childInformationData = await childInformationDocRef.set({name, birthday, gender, etnic, testerRole, userId, time})

        res.json({status: "success"})
    } catch (error) {
        res.json(error)
    }
})

router.delete('/:id', async (req, res) =>  {
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

export default router