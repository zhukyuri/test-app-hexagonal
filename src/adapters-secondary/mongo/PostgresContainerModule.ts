import { ContainerModule, interfaces } from 'inversify';
import { UserEntityConverter } from './user/converters/UserEntityConverter';
import { UserRepository, UserRepositoryType } from '../../core/component/user/port/UserRepository';
import { UserRepositoryAdapter } from './user/repository/UserRepositoryAdapter';

export default new ContainerModule((
  bind: interfaces.Bind,
  unbind: interfaces.Unbind,
  isBound: interfaces.IsBound,
  rebind: interfaces.Rebind,
) => {
  bind(UserEntityConverter).toSelf();
  bind<UserRepository>(UserRepositoryType).to(UserRepositoryAdapter);
});
