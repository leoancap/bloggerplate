"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSessionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SessionUpdateInput_1 = require("../../../inputs/SessionUpdateInput");
const SessionWhereUniqueInput_1 = require("../../../inputs/SessionWhereUniqueInput");
let UpdateSessionArgs = class UpdateSessionArgs {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionUpdateInput_1.SessionUpdateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionUpdateInput_1.SessionUpdateInput)
], UpdateSessionArgs.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SessionWhereUniqueInput_1.SessionWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SessionWhereUniqueInput_1.SessionWhereUniqueInput)
], UpdateSessionArgs.prototype, "where", void 0);
UpdateSessionArgs = (0, tslib_1.__decorate)([
    TypeGraphQL.ArgsType()
], UpdateSessionArgs);
exports.UpdateSessionArgs = UpdateSessionArgs;
