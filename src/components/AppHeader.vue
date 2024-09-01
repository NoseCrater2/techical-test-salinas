<template>
  <header class="fixed w-full bg-white z-10">
    <nav class="h-[70px] border-b flex justify-between">
      <div class="flex">
        <div class="h-full w-[70px] flex bg-primary">
          <img width="35px" class="m-auto self-center" src="/src/assets/hamburguesa.svg" alt="" />
        </div>
        <div class="h-full w-[70px] flex">
          <img width="35px" class="m-auto self-center" src="/src/assets/home.svg" alt="" />
        </div>
        <div class="h-[40px] border-l border-1 border-gray my-auto" />
      </div>
      <v-avatar size="50px" class="my-auto mr-5">
        <v-img
          alt="Avatar"
          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
        ></v-img>
      </v-avatar>
    </nav>
  </header>
</template>
