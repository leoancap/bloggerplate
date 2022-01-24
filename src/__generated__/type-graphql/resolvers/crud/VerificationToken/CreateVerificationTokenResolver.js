"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVerificationTokenResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const CreateVerificationTokenArgs_1 = require("./args/CreateVerificationTokenArgs");
const VerificationToken_1 = require("../../../models/VerificationToken");
const helpers_1 = require("../../../helpers");
let CreateVerificationTokenResolver = class CreateVerificationTokenResolver {
    async createVerificationToken(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).verificationToken.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => VerificationToken_1.VerificationToken, {
        nullable: false
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, CreateVerificationTokenArgs_1.CreateVerificationTokenArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], CreateVerificationTokenResolver.prototype, "createVerificationToken", null);
CreateVerificationTokenResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => VerificationToken_1.VerificationToken)
], CreateVerificationTokenResolver);
exports.CreateVerificationTokenResolver = CreateVerificationTokenResolver;
