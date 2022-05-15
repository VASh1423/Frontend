const UserModal = require('../models/user-model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')

class UserService{
  async registration(email, password){
    const candidate = await UserModal.findOne({email})

    if(candidate){
      throw ApiError.BadRequest('Пользователь с такой почтой уже существует')
    }
    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid.v4()

    const user = await UserModal.create({email, password: hashPassword, activationLink})
    await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

    const userDto = new UserDto(user)
    const tokens = tokenService.generationToken({...userDto})
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return {
      ...tokens,
      user: userDto
    }
  }

  async activate(activationLink) {
    const user = await UserModal.findOne({activationLink})
    if (!user) {
        throw ApiError.BadRequest('Неккоректная ссылка активации')
    }
    user.isActivated = true;
    await user.save();
}
}

module.exports = new UserService()