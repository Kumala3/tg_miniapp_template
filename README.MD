This template is used for development Telegram bots on [`aiogram v3.0+`](https://github.com/aiogram/aiogram/tree/dev-3.x) + MiniApp on [`React`](https://github.com/facebook/react) & [`TypeScript`](https://github.com/microsoft/typescript)

<!-- ## SQLAlchemy + Alembic
В коді є приклади таблички User з використанням SQLAlchemy 2.0, та скрипти для алембіку (ініціалізація алембік, створення та застосування міграцій).

Але, якщо ви з цими інструментами ніколи не працювали, то зверніться до документації і дізнайтесь про ці інструменти. 
Також, в мене є англомовний [курс по цим інструментам на Udemy](https://www.udemy.com/course/sqlalchemy-alembic-bootcamp/?referralCode=E9099C5B5109EB747126). -->

## To start using it:
1. Register the account on ngrok(if you haven't yet): [Sign Up Ngrok](https://dashboard.ngrok.com/signup)
2. Create `ngrok.yml` by data from ngrok-example.yml and fill out required data: `authtoken` and `domain`.
3. Create `.env` by data from `.end.dist` and fill out required data.
4. **Run with Docker:**
    1. Download and install `Docker desktop` (if you haven't yet): [Download Docker Desktop](https://docs.docker.com/get-docker/).
    2. Run project with next command in terminal:  
        `docker-compose up --build`

<!-- 1. Скопіюйте `.env.dist` в `.env` і заповніть необхідні дані.
2. Створіть нові хендлери.
3. **Docker:**
   1. Можете одразу запускати проєкт із Docker, а якщо в вас його немає, то [завантажте, та встановіть](https://docs.docker.com/get-docker/).
   2. Запустіть проєкт з команди `docker-compose up` -->

### Як робити та реєструвати хендлери:
Створюєте модуль `you_name.py` у папці `handlers`.

Створюєте роутер у `you_name.py`.
```python
from aiogram import Router
user_router = Router()
```
Можна робити декілька роутерів в одному модулі, та на кожний з них навішувати хендлери.
Можна реєструвати хендлери декораторами:
```python
@user_router.message(commands=["start"])
async def user_start(message):
    await message.reply("Вітаю, звичайний користувач!")
```

Заходимо у файл `handlers/__init__.py` і додаємо всі роутери в нього:
```python
from .admin import admin_router
from .echo import echo_router
from .user import user_router

...


routers_list = [
    admin_router,
    user_router,
    echo_router,  # echo_router must be last
]

```
### Як додати хендлери до нашого бота:
Переходимо до файлу  `bot.py` та розпаковуємо наші хендлери:
```python
from tgbot.handlers import routers_list

...

async def main():
   
    ...

   dp.include_routers(*routers_list)

    ...


```

### Туторіали з aiogram v3
Відосів поки що немає, але @Groosha вже почав робити [свій підручник](https://mastergroosha.github.io/aiogram-3-guide).
