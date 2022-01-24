"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const Session_1 = require("../../../models/Session");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let SessionRelationsResolver = class SessionRelationsResolver {
    async user(session, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).session.findUnique({
            where: {
                id: session.id,
            },
        }).user({});
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.FieldResolver(_type => User_1.User, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Root()),
    (0, tslib_1.__param)(1, TypeGraphQL.Ctx()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Session_1.Session, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], SessionRelationsResolver.prototype, "user", null);
SessionRelationsResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Session_1.Session)
], SessionRelationsResolver);
exports.SessionRelationsResolver = SessionRelationsResolver;
