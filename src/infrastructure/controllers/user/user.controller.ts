import { Controller, Get, Inject, ParseIntPipe, Query } from '@nestjs/common';
import { ApiExtraModels, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UseCaseProxy } from '../../usecases-proxy/usecases-proxy';
import { UserPresenter } from './user.presenter';
import { UsecasesProxyModule } from 'src/infrastructure/usecases-proxy/usecases-proxy.module';
import { GetUserUseCases } from 'src/usecases/getUser.usecases';
import { ApiResponseType } from 'src/infrastructure/common/swagger/response.decorator';

@Controller('user')
@ApiTags('user')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(UserPresenter)
export class UserController {
  constructor(
    @Inject(UsecasesProxyModule.GET_USER_USECASES_PROXY)
    private readonly getUserUsecaseProxy: UseCaseProxy<GetUserUseCases>,
  ) {}

  // @Get('user')
  // @ApiResponseType(UserPresenter, false)
  // async getUser(@Query('id', ParseIntPipe) name: string) {
  //   const User = await this.getUserUsecaseProxy.getInstance().execute(name);
  //   return new UserPresenter(User);
  // }
  @Get()
  @ApiResponseType(UserPresenter, false)
  async getUser() {
    return [
      {
        user: {
          name: 'Test',
        },
      },
    ];
  }
}
