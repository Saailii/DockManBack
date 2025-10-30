import vine from '@vinejs/vine'


const userSchema = vine.object({
    username: vine.string().minLength(4).trim(),
    password: vine.string().minLength(8).maxLength(64)
})


export default userSchema