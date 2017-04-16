<?php

namespace Drupal\aplmineral_devroutines\Controller;

use Drupal\Core\Controller\ControllerBase;

class DevRoutinesController extends ControllerBase {
  
  /**
   * Display the markup.
   *
   * @return array
   */
  public function content() {
    return array(
      '#type' => 'markup',
      '#markup' => $this->t('Hello, dev!'),
    );
  }
  
}