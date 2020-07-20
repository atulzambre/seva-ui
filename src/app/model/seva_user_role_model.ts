import { SevaRoleModel } from "./seva_role_model";
import { SevaUserModel } from "./seva_user_model";

export class SevaUserRoleModel {
  surId: number;
  surCreatedDate: Date;
  sevaRole: SevaRoleModel;
  sevaUser: SevaUserModel;
}
