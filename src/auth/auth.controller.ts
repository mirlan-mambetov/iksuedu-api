import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import { SignInDTO, SignUpDTO } from './dto/auth.dto'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	/**
	 *
	 * @param dto
	 * @returns MESSAGE OF SUCCESS LOGIN & ACCESS TOKEN
	 */
	@Post('signin')
	@HttpCode(HttpStatus.OK)
	@UsePipes(new ValidationPipe())
	signIn(@Body() dto: SignInDTO) {
		return this.authService.signIn(dto)
	}

	/**
	 *
	 * @param dto
	 * @returns MESSAGE
	 * @description REGISTER NEW USER
	 */
	@Post('signup')
	@HttpCode(HttpStatus.OK)
	@UsePipes(new ValidationPipe())
	signUp(@Body() dto: SignUpDTO) {
		return this.authService.signUp(dto)
	}
}
