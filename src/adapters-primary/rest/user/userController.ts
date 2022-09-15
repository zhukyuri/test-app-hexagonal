import { Body, JsonController, Post } from 'routing-controllers';
import { inject, injectable } from 'inversify';
import { UserRegistrationService } from '../../../core/component/user/application/services/UserRegistrationService';
import { UserRegistrationInput } from '../../../core/component/user/application/data/input/UserRegistrationInput';
import { validateOrReject } from 'class-validator';
import { UserResponse } from '../../../core/component/user/application/data/output/UserResponse';

@injectable()
@JsonController('/user')
export class UserController {
  private userRegistrationService: UserRegistrationService;

  constructor(
    @inject(UserRegistrationService) userRegistrationService: UserRegistrationService,
  ) {
    this.userRegistrationService = userRegistrationService;
  }

  @Post()
  public async register(@Body() input: UserRegistrationInput): Promise<UserResponse> {
    await validateOrReject(input);
    return this.userRegistrationService.registerUser(input);
  }

  // TODO
  // @Post('/notification_token')
  // public async addToken(
  //   @Body() input: UserTokenInput,
  //   @CurrentUser({ required: true }) userId: string,
  // ): Promise<UserResponse> {
  //   await validateOrReject(input);
  //   return await this.userRegistrationService.addToken(input.token, userId);
  // }
}
