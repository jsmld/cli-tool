#!/usr/bin/env node
import arg from 'arg'
import chalk from 'chalk'

try {
  const args = arg({
    '--start': Boolean,
    '--build': Boolean
  })

  if (args['--start']) {
    console.log(chalk.bgCyanBright('Starting app...'))
  }
} catch (error) {
  console.log(chalk.yellow(error.message))
  console.log()
  usage()
}

function usage () {
  console.log(`${chalk.whiteBright('tool [CMD]')}
  ${chalk.greenBright('--start\tStarts the app')}
  ${chalk.greenBright('--build\tBuilds the app')}`)
}
