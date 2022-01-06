# CoCoo Studio
本项目为 CoCoo Studio 官网工程。

[<img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="30" />](https://www.gatsbyjs.com) Use [Gatsby](https://www.gatsbyjs.com) v3 static-site generation web framework

[<img alt="Tailwind" src="https://user-images.githubusercontent.com/5106039/148322663-0202dba0-4021-443a-a8ed-c140c27d0389.png" width="30" />](https://tailwindcss.com/) Use [Tailwind CSS](https://tailwindcss.com/) framework 

## 🛵 Summary

- 修改网站域名、标题、添加 Gatsby 插件、添加 Gatsby 资源引用文件夹等 Gatsby 相关配置，请修改 `/gatsby-config.js`。

- 添加页面请在 `/src/pages/` 目录下新建 js 文件，Gatsby 会自动处理路由。

- tailwindcss 修改主题、插件、设置等请配置 `/tailwind.config.js`。

- 已开启 tailwindcss 的 JIT 模式，添加常用数值的时候请优先扩展主题，特殊数值可直接使用 JIT 语法。

- 如需自定义 tailwindcss 里的样式名请配置 `src/styles/global.css`。

- 开启 JIT 后自定义样式名会受到限制，[查看文档](https://tailwindcss.com/docs/just-in-time-mode#:~:text=You%20can%20only%20%40apply%20classes%20that%20are%20part%20of%20core%2C%20generated%20by%20plugins%2C%20or%20defined%20within%20a%20%40layer%20rule)，遇到限制时可使用 `/src/components/style.module.css` 代替。


## 🚁 Development
1. **Install dependencies.**

    Navigate into this site’s directory and install dependencies.

    ```shell
    yarn install
    ```

2.  **Start developing.**

    ```shell
    yarn start
    ```

3.  **Open the code and start customizing!**

    Site is now running at [http://localhost:8000](http://localhost:8000)!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀  Deploy

Just push your commits to the github repo, website will be automatically deployed to the [Gatsby Cloud](https://www.gatsbyjs.com/cloud/)
