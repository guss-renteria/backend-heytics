import { getAllUsers, getUserByPk, addUser, updUser, remUser } from '../services/users.services'

export const getUsers = async (req, res, next) => {
  try {
    const users = await getAllUsers()
    res.json(users)
  } catch (e) {
    next(e)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const users = await getUserByPk(id)
    res.json(users)
  } catch (e) {
    next(e)
  }
}

export const postUser = async (req, res, next) => {
  try {
    const body = req.body
    const users = await addUser(body)
    res.json(users)
  } catch (e) {
    next(e)
  }
}

export const putUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const body = req.body
    const users = await updUser(id, body)
    res.json(users)
  } catch (e) {
    next(e)
  }
}

export const delUser = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)
    const users = await remUser(id)
    res.json(users)
  } catch (e) {
    next(e)
  }
}
