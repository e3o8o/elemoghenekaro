<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* blocks/base.html.twig */
class __TwigTemplate_5d6d03b61acee21fa6ce30f2feb0302d5adc86260ee627b31e7d054b385e1276 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
            'content_surround' => [$this, 'block_content_surround'],
            'content' => [$this, 'block_content'],
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        $this->displayBlock('content_surround', $context, $blocks);
    }

    public function block_content_surround($context, array $blocks = [])
    {
        // line 2
        $this->displayBlock('content', $context, $blocks);
    }

    public function block_content($context, array $blocks = [])
    {
    }

    public function getTemplateName()
    {
        return "blocks/base.html.twig";
    }

    public function getDebugInfo()
    {
        return array (  38 => 2,  32 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "blocks/base.html.twig", "/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/themes/quark/templates/blocks/base.html.twig");
    }
}
