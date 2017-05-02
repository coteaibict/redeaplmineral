<?php

namespace Drupal\aplmineral_core\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
* An example controller.
*/
class HomeController extends ControllerBase {

/**
* {@inheritdoc}
*/
public function content() {
    $build = array(
      '#type' => 'markup',
      '#markup' => t(''),
    );
    return $build;
  }
}
