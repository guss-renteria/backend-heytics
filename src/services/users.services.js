import { Users } from '../models/'

export const getAllUsers = async () => {
  try {
    const users = await Users.findAll()
    return users
  }catch(e) {
    throw e;
  }
}

export const getUserByPk = async (id) => {
  try {
    const users = await Users.findByPk(id)
    return users
  }catch(e) {
    throw e;
  }
}

export const addUser = async (body) => {
  try {
    return await Users.create(body)
  }catch(e) {
    throw e;
  }
}

export const updUser = async (id, body) => {
  try {
    const res = await Users.update(body, { where: { id } })
    return parseInt(res) > 0
      ? '[+] se actualizo correctamente elemento'
      : '[-] no se pudo actualizar el elemento'
  }catch(e) {
    throw e;
  }
}

export const remUser = async (id) => {
  try {
    const res = await Users.destroy({ where: { id } })
    return parseInt(res) > 0
      ? '[+] se elimino correctamente elemento'
      : '[-] no se pudo elminar el elemento'
  }catch(e) {
    throw e;
  }
}
