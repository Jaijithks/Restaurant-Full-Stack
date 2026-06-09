import Jwt from 'jsonwebtoken'

const AdminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.status(401).json({ success: false, message: "unauthorized user" })
        }

        const token_decode = Jwt.verify(token, process.env.JWT_SECRET)
        if (!token_decode) {
            return res.status(403).json({ success: false, message: "user is not authenticated" })
        }
        next()
    } catch (error) {
        console.error(error)
        return res.status(500).json({ success: false, message: "Server error" })
    }
}
export default AdminAuth