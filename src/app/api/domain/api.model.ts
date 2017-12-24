import { ApiParam } from './api-param.model';
/**
 *
 * 接口实体对象
*/
export interface Api {
  id: Number;
  // 接口名称
  name: String;
  // url
  url: String;
  // 参数
  params: Array<ApiParam>[];
  // 文档链接
  docLink: String;

  // 成功的响应格式
  successResponse: any;
  // 错误的响应格式
  errorResponse: any;
}
