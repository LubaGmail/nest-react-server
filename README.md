https://www.javatpoint.com/nestjs

nest new nest101           nest g resource users

Sandbox 
  Template
    https://codesandbox.io/s/hello-world-rj3u4?from-embed=&file=/nest-cli.json
  Forked
    https://codesandbox.io/s/hello-world-forked-zhc7df?file=/src/hello/hello.controller.ts:414-416

Docs
  https://docs.nestjs.com/controllers

yarn start --watch        localhost:3000

REST api 
  BASE_URL = 'https://reqres.in/api/products/'        https://reqres.in/

Controller
  handles incoming requests and returning responses to the client.

Create CRUD infrastructure within src/
  nest g resource courses

Syntax
  @Get()
    createCourseDto

  @Get(':id')
    ( @Param() params )			- or - 			( @Param('id') id: string )
      params.id

  @Post()
    ( @Body() createCourseDto: CreateCourseDto )

  @Delete()
    ( @Query() query )
      query.id

  @Patch(':id')
    ( @Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto )





