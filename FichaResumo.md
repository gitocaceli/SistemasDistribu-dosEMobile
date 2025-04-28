
# FichaResumo: Padrão MVC

## Resumo:
No desenvolvimento de APIs REST, alguns padrões são amplamente aplicados para garantir organização, escababilidade e manutenção mais fácil do código. Entre os mais utilizados destacam-se: MVC, Repository Pattern, Service Pattern, Factory Pattern e DTO.

## Conceito: 
O padrão escolhido para esta atividade foi o **MVC** que significa (Model, View, Controller). Ele é um padrão de projeto usado para organizar o código separando responsabilidades. Este padrão visa separar a lógica de negócios, a interface do utilizador e o processamento dos dados para facilitar o desenvolvimento, manutenção e escalabilidade da aplicação. 

## Componentes:
- **Model** = Representa os dados da aplicação 
- **View** = Mostra as informações para o usuário
- **Controller** = Recebe a requisição do usuário, chama o Model, e manda uma resposta de volta.

## Funcionamento:
1. O usuário faz uma requisição (por exemplo, um POST para criar um produto)
2. O **Controller** recebe essa requisição e chama o Model para manipular ou armazenar dados
3. O **Controller** devolve uma resposta para o usuário

## Exemplo Simplificado:
- **Model** = Estrutura os dados 
- **View** = Quase nunca usamos em API, porque não tem página, só resposta em JSON
- **Controller** = Recebe a requisição HTTP (GET, POST, PUT, DELETE)

## Vantagens:
- Organização clara entre os dados, interface e controle
- Facilidade de entender e programas em projetos pequenos e médios
- Separação de responsabilidades

## Desvantagens:
- Em projetos muito grandes, o **Controller** pode acumular muita lógica se não for combinado com outros padões