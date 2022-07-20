"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSerializer = void 0;
const passport_1 = require("@nestjs/passport");
class SessionSerializer extends passport_1.PassportSerializer {
    constructor(userService) {
        super();
        this.userService = userService;
    }
    serializeUser(user, done) {
        console.log('Serialize User');
        done(null, user);
    }
    async deserializeUser(user, done) {
        console.log('Deserialize User');
        const userDB = await this.userService.findById(user.id);
        return userDB ? done(null, userDB) : done(null, null);
    }
}
exports.SessionSerializer = SessionSerializer;
//# sourceMappingURL=session-serializer.js.map