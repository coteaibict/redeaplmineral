<?php
namespace Drupal\aplmineral\Controller;

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
      '#markup' => t('Hello World!'),
    );
    return $build;
  }
}
