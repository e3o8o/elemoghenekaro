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

/* forms/fields/number/number.html.twig */
class __TwigTemplate_1385693bc4e4cfecc17a01a13b12953549ff63d6f21c0dc99518bfbe16562e4f extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->blocks = [
            'input_attributes' => [$this, 'block_input_attributes'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "forms/fields/text/text.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $this->parent = $this->loadTemplate("forms/fields/text/text.html.twig", "forms/fields/number/number.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
    }

    // line 3
    public function block_input_attributes($context, array $blocks = [])
    {
        // line 4
        echo "    type=\"number\"
    ";
        // line 5
        if ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", [], "any", false, true), "min", [], "any", true, true)) {
            echo "min=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "min", []), "html", null, true);
            echo "\"";
        }
        // line 6
        echo "    ";
        if ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", [], "any", false, true), "max", [], "any", true, true)) {
            echo "max=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "max", []), "html", null, true);
            echo "\"";
        }
        // line 7
        echo "    ";
        if ($this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", [], "any", false, true), "step", [], "any", true, true)) {
            echo "step=\"";
            echo twig_escape_filter($this->env, $this->getAttribute($this->getAttribute(($context["field"] ?? null), "validate", []), "step", []), "html", null, true);
            echo "\"";
        }
        // line 8
        echo "    ";
        $this->displayParentBlock("input_attributes", $context, $blocks);
        echo "
";
    }

    public function getTemplateName()
    {
        return "forms/fields/number/number.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  65 => 8,  58 => 7,  51 => 6,  45 => 5,  42 => 4,  39 => 3,  29 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "forms/fields/number/number.html.twig", "/Users/elemoghenekaro/surreal/preterag-site/grav-cms/user/plugins/form/templates/forms/fields/number/number.html.twig");
    }
}
