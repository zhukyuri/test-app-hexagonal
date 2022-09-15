import {IsString, MaxLength} from 'class-validator';

export class UserTokenInput {
    @IsString()
    @MaxLength(255)
    token: string;
}
