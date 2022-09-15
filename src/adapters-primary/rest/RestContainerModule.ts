import {ContainerModule, interfaces} from 'inversify';
import {UserController} from './user/userController';
import {HttpErrorHandler} from './common/HttpErrorHandlers';

export default new ContainerModule((
    bind: interfaces.Bind,
    unbind: interfaces.Unbind,
    isBound: interfaces.IsBound,
    rebind: interfaces.Rebind
) => {
    bind(UserController).toSelf();
    bind(HttpErrorHandler).toSelf();
});
