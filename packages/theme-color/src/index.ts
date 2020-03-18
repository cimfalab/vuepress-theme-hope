/*
 * @Author: Mr.Hope
 * @Date: 2020-01-13 18:40:39
 * @LastEditors: Mr.Hope
 * @LastEditTime: 2020-03-11 14:25:12
 * @Description:
 */
import { PluginOptionAPI } from 'vuepress-types';
import { ThemeColorOptions } from '../types';
import { resolve } from 'path';

export = (options: ThemeColorOptions): PluginOptionAPI =>
  ({
    name: 'theme-color',

    define: () =>
      ({
        THEME_COLOR_OPTIONS: options || {}
      } as Record<string, any>),

    enhanceAppFiles: resolve(__dirname, 'enhanceAppFile.ts'),

    plugins: [
      /** typescript 支持 */
      ['typescript']
    ]
  } as PluginOptionAPI);