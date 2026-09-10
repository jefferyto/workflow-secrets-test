import * as core from '@actions/core';
import * as github from '@actions/github';

try {
  const formatted_secret = core.getInput('formatted_secret');
  core.info(`The formatted secret is "${formatted_secret}"`);
  core.info(`The formatted secret is ${formatted_secret.length} characters long`);
  if (formatted_secret === '/secret/') {
    core.info('The formatted secret is correct');
  } else {
    core.info('The formatted secret is not correct');
  }
} catch (error) {
  core.setFailed(error.message);
}
