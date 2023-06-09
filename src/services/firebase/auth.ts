import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import app from './app'
import { setCachedUserInfo } from '../storage/user'

const firebaseAuth = getAuth(app)

export async function login(values: { email: string; password: string }) {
  try {
    const { email, password } = values
    const credentials = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )
    const user = credentials?.user ? credentials.user : null
    setCachedUserInfo(user)
    return user
  } catch (err) {
    console.log(err)
  }
}

export async function signup(email: string, password: string) {
  try {
    const credentials = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    )

    const user = credentials?.user ? credentials.user : null
    setCachedUserInfo(user)
    return user
  } catch (err) {
    console.log(err)
  }
}

export async function logout() {
  try {
    await signOut(firebaseAuth)
  } catch (err) {
    console.log(err)
  }
}
