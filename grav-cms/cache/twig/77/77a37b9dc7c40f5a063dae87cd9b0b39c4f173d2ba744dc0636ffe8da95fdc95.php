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

/* edit title template (string template 04d075666e11e1c5614fc5d480edea046c34d775020fcfb20492914a16457f2d) */
class __TwigTemplate_9feed3861465b01bfa23c7d0fa784e589b03192a641ee689bc0f176351e0bf39 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        if ($this->getAttribute(($context["object"] ?? null), "root", [])) {
            echo "Root <small>( &lt;root&gt; )</small>";
        } else {
            echo twig_escape_filter($this->env, ((($this->getAttribute(($context["form"] ?? null), "value", [0 => "header.title"], "method", true, true) &&  !(null === $this->getAttribute(($context["form"] ?? null), "value", [0 => "header.title"], "method")))) ? ($this->getAttribute(($context["form"] ?? null), "value", [0 => "header.title"], "method")) : ($this->getAttribute(($context["form"] ?? null), "value", [0 => "folder"], "method"))));
            echo " <small>( ";
            echo twig_escape_filter($this->env, (($this->getAttribute($this->getAttribute(($context["object"] ?? null), "getRoute", [], "method"), "toString", [0 => false], "method")) ? ($this->getAttribute($this->getAttribute(($context["object"] ?? null), "getRoute", [], "method"), "toString", [0 => false], "method")) : ("/")));
            echo " )</small>";
        }
    }

    public function getTemplateName()
    {
        return "edit title template (string template 04d075666e11e1c5614fc5d480edea046c34d775020fcfb20492914a16457f2d)";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  30 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "edit title template (string template 04d075666e11e1c5614fc5d480edea046c34d775020fcfb20492914a16457f2d)", "");
    }
}
