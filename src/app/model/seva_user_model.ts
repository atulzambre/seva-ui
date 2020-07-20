import { SevaUserRoleModel } from "./seva_user_role_model";

export class SevaUserModel {
  suId: number;
  suCreatedDate: Date;
  suEmail: String;
  suName: String;
  suPassword: String;
  suPhone: number;
  sevaUserRoles: SevaUserRoleModel[];
}
