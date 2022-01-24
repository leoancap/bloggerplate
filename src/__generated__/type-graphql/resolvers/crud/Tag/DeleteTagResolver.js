"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTagResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const graphql_fields_1 = (0, tslib_1.__importDefault)(require("graphql-fields"));
const DeleteTagArgs_1 = require("./args/DeleteTagArgs");
const Tag_1 = require("../../../models/Tag");
const helpers_1 = require("../../../helpers");
let DeleteTagResolver = class DeleteTagResolver {
    async deleteTag(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).tag.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Mutation(_returns => Tag_1.Tag, {
        nullable: true
    }),
    (0, tslib_1.__param)(0, TypeGraphQL.Ctx()),
    (0, tslib_1.__param)(1, TypeGraphQL.Info()),
    (0, tslib_1.__param)(2, TypeGraphQL.Args()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object, DeleteTagArgs_1.DeleteTagArgs]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], DeleteTagResolver.prototype, "deleteTag", null);
DeleteTagResolver = (0, tslib_1.__decorate)([
    TypeGraphQL.Resolver(_of => Tag_1.Tag)
], DeleteTagResolver);
exports.DeleteTagResolver = DeleteTagResolver;
