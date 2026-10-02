export interface AuthOneCharging {
  id: number;
  sync_id: number;
  code: string;
  name: string;
  company_id: number;
  company_code: string;
  company_name: string;
  business_unit_id: number;
  business_unit_code: string;
  business_unit_name: string;
  department_id: number;
  department_code: string;
  department_name: string;
  unit_id: number;
  unit_code: string;
  unit_name: string;
  sub_unit_id: number;
  sub_unit_code: string;
  sub_unit_name: string;
  location_id: number;
  location_code: string;
  location_name: string;
}

export interface RoleData {
  id: number;
  name: string;
  permissions?: string[];
}

export interface User {
  id: string;
  username: string;
  gender?: string;
  role: RoleData;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  prefix_id?: string;
  id_no?: string;
  profile_picture?: string | null;
  e_signature?: string | null;
  grace_period_days?: number | null;
  one_charging?: AuthOneCharging | null;
  should_change_password?: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  data: User;
  token: string;
  message: string;
}
